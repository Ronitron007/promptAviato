import React from 'react';
import { Avatar, IconButton, NewGridItemIcon, CrossIcon, PhoneIcon, ChatIcon, MoreIcon } from 'aviato-ui';

export const ContactInfo: React.FC = () => {
  return (
    <div className="w-80 border-l border-[#dfe1e6]">
      <div className="p-4 border-b border-[#d8dae5] flex items-center justify-between">
        <h2 className="font-semibold text-[#474d66]">Contact Info</h2>
        <div className="flex items-center space-x-2">
          <IconButton icon={NewGridItemIcon} appearance="minimal" />
          <IconButton icon={CrossIcon} appearance="minimal" />
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-xl border border-[#d8dae5] p-4 mb-6">
          <div className="flex flex-col items-center mb-4">
            <Avatar name="KW" size={64} color="blue" />
            <h3 className="font-semibold text-[#101840] mt-2">Kristin Watson</h3>
            <p className="text-[#696f8c]">kristinwatson@mail.com</p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <IconButton icon={PhoneIcon} appearance="minimal" />
              <span className="text-xs text-[#696f8c] mt-1">Call</span>
            </div>
            <div className="flex flex-col items-center">
              <IconButton icon={PhoneIcon} appearance="minimal" />
              <span className="text-xs text-[#696f8c] mt-1">Email</span>
            </div>
            <div className="flex flex-col items-center">
              <IconButton icon={ChatIcon} appearance="minimal" />
              <span className="text-xs text-[#696f8c] mt-1">Message</span>
            </div>
            <div className="flex flex-col items-center">
              <IconButton icon={MoreIcon} appearance="minimal" />
              <span className="text-xs text-[#696f8c] mt-1">More</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-medium text-[#696f8c] mb-4">Activity</h3>
            <div className="space-y-2">
              <div className="bg-white rounded-lg border border-[#d8dae5] p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#ebf0ff] rounded-lg flex items-center justify-center">
                    <i className="fas fa-tasks text-[#3366ff]"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-[#101840]">Tasks</h4>
                    <p className="text-xs text-[#696f8c]">Call Kristin and discuss business plan for new agency</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-[#d8dae5] p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#d3f5f7] rounded-lg flex items-center justify-center">
                    <i className="fas fa-comment text-[#00b8d9]"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-[#101840]">Messages</h4>
                    <p className="text-xs text-[#696f8c]">
                      Hey Kristin! I'm opening a new agency and would like to run my business plan by you?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-medium text-[#696f8c] mb-4">General</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-[#8f95b2]">Name</span>
                <span className="text-sm font-medium text-[#101840]">Kristin Watson</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#8f95b2]">Company</span>
                <div className="flex items-center space-x-2">
                  <img src="assets/image_35662fc.png" alt="Xing" className="h-4" />
                  <span className="text-sm font-medium text-[#101840]">Xing</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#8f95b2]">Connection</span>
                <span className="px-2 py-1 bg-[#edeefd] text-[#4e57ef] text-xs font-medium rounded">Employee</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8f95b2]">Email</span>
                <span className="text-sm font-medium text-[#101840]">kristinwatson@mail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8f95b2]">Phone number</span>
                <span className="text-sm font-medium text-[#101840]">(303) 555-0105</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-medium text-[#696f8c] mb-4">Other information</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-[#8f95b2]">Gender</span>
                <span className="text-sm font-medium text-[#101840]">Female</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8f95b2]">Birthday</span>
                <span className="text-sm font-medium text-[#101840]">February 28, 2003</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8f95b2]">Country</span>
                <span className="text-sm font-medium text-[#101840]">United States</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8f95b2]">City</span>
                <span className="text-sm font-medium text-[#101840]">Syracuse, Connecticut</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
