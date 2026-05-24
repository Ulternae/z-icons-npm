import React from 'react';

export interface BruMeetupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMeetup: React.FC<BruMeetupProps>;
export default BruMeetup;
