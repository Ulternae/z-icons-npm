import React from 'react';

export interface CoreVoicemailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVoicemail: React.FC<CoreVoicemailProps>;
export default CoreVoicemail;
