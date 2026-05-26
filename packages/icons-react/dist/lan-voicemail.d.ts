import React from 'react';

export interface LanVoicemailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVoicemail: React.FC<LanVoicemailProps>;
export default LanVoicemail;
