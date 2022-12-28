import { useState } from 'react';
import { CodePane } from 'spectacle';

const keys = [];

const TabbedSlider = () => {
  const [activeTab, setActiveTab] = useState('slide1');

  return (
    <section className="realtive">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
          <div className="lg:col-span-4 md:col-span-5">
            <div className="sticky top-20">
              <Tabs>
                <TabItem
                  onClick={() => setActiveTab('slide1')}
                  isActive={activeTab === 'slide1'}
                >
                  Definitions
                </TabItem>
                <TabItem
                  onClick={() => setActiveTab('slide2')}
                  isActive={activeTab === 'slide2'}
                >
                  Example
                </TabItem>
                <TabItem
                  onClick={() => setActiveTab('slide3')}
                  isActive={activeTab === 'slide3'}
                >
                  Preventions
                </TabItem>
                <TabItem
                  onClick={() => setActiveTab('slide4')}
                  isActive={activeTab === 'slide4'}
                >
                  Further Readings
                </TabItem>
              </Tabs>
            </div>
          </div>

          <TabsContent>
            <TabsContentItem
              activeTab={activeTab}
              title="Private Office"
              id="slide1"
            >
              <p className="text-slate-400 mb-2">
                Private Office This is required when, for
                example, the final text is not yet
                available. Dummy text is also known as 'fill
                text'. It is said that song composers of the
                past used dummy texts as lyrics. Private
                Office This is required when, for example,
                the final text is not yet available. Dummy
                text is also known as 'fill text'. It iss
                said that song composers of the past used
                dummy texts as lyrics. Private Office This
                is required when, for example, the final
                text is not yet available. Dummy text is
                also known as 'fill text'. It is said that
                song composers of the past used dummy texts
                as lyrics. Private Office This is required
                when, for example, the final text is not yet
                available. Dummy text is also known as 'fill
                text'. It is said that song composers of the
                past used dummy texts as lyrics.
              </p>
              <p className="text-slate-400 mb-2">
                Private Office This is required when, for
                example, the final text is not yet
                available. Dummy text is also known as 'fill
                text'. It is said that song composers of the
                past used dummy texts as lyrics. Private
                Office This is required when, for example,
                the final text is not yet available. Dummy
                text is also known as 'fill text'. It iss
                said that song composers of the past used
                dummy texts as lyrics. Private Office This
                is required when, for example, the final
                text is not yet available. Dummy text is
                also known as 'fill text'. It is said that
                song composers of the past used dummy texts
                as lyrics. Private Office This is required
                when, for example, the final text is not yet
                available. Dummy text is also known as 'fill
                text'. It is said that song composers of the
                past used dummy texts as lyrics.
              </p>
              <CodePane language="tsx">
                {`
                    <TrygSlide title="Today's Menu">
                    <Agenda />
                    </TrygSlide>
                 `}
              </CodePane>
            </TabsContentItem>

            <TabsContentItem
              activeTab={activeTab}
              title="Private Office 2"
              id="slide2"
            >
              <p className="text-slate-400 mb-2">
                Private Office This is required when, for
                example, the final text is not yet
                available. Dummy text is also known as 'fill
                text'. It is said that song composers of the
                past used dummy texts as lyrics.
              </p>
            </TabsContentItem>
            <TabsContentItem
              activeTab={activeTab}
              title="Private Office 3"
              id="slide3"
            >
              <p className="text-slate-400 mb-2">
                Private Office This is required when, for
                example, the final text is not yet
                available. Dummy text is also known as 'fill
                text'. It is said that song composers of the
                past used dummy texts as lyrics.
              </p>
            </TabsContentItem>
            <TabsContentItem
              activeTab={activeTab}
              title="Private Office 4"
              id="slide4"
            >
              <ul className="space-y-4">
                <li className="flex items-center">
                  <StyledCheck />
                  <p className="ml-4 text-black">
                    Customizing your{' '}
                    <code className="text-sm font-bold text-gray-900">
                      tailwind.config.js
                    </code>{' '}
                    file
                  </p>
                </li>
                <li className="flex items-center">
                  <StyledCheck />
                  <p className="ml-4 text-black">
                    Extracting classNamees with
                    <code className="text-sm font-bold text-gray-900">
                      @apply
                    </code>
                  </p>
                </li>
                <li className="flex items-center">
                  <StyledCheck />
                  <p className="ml-4 text-black">
                    Code completion with instant preview
                  </p>
                </li>
              </ul>
            </TabsContentItem>
          </TabsContent>
        </div>
      </div>
    </section>
  );
};

export default TabbedSlider;

export const Tabs = ({ children }: any) => {
  return (
    <ul
      className="flex-column text-left dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md text-black"
      id="myTab"
      data-tabs-toggle="#myTabContent"
      role="tablist"
    >
      {children}
    </ul>
  );
};

export const TabItem = ({
  children,
  onClick,
  isActive,
}: any) => {
  const isActiveClass = isActive
    ? 'bg-red-500 text-white'
    : '';
  return (
    <li
      role="presentation"
      className={`pt-1 pb-1 ${isActiveClass}`}
    >
      <button
        className={`px-4 py-2 text-left text-base font-semibold rounded-md w-full hover:text-indigo-600 transition-all duration-500 ease-in-out`}
        id="profile-tab"
        data-tabs-target="#profile"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="true"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};

export const TabsContent = ({ children }: any) => {
  return (
    <div className="lg:col-span-8 md:col-span-7">
      <div
        id="myTabContent"
        className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-red-800 rounded-md"
      >
        {children}
      </div>
    </div>
  );
};

export const TabsContentItem = ({
  children,
  title,
  activeTab,
  id,
}: any) => {
  return (
    <div
      className={
        activeTab === id
          ? 'overflow-auto max-h-96'
          : 'hidden'
      }
      id="contacts"
      role="tabpanel"
      aria-labelledby="contacts-tab"
    >
      <div className="mt-6">
        {title && (
          <h5 className="text-lg text-black font-semibold mb-4">
            {title}
          </h5>
        )}
        <>{children}</>
      </div>
    </div>
  );
};

const StyledCheck = () => {
  return (
    <svg
      className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="11" />
      <path
        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
        fill="none"
      />
    </svg>
  );
};
