import React from 'react';

export interface LanVoicemailThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVoicemailThin: React.FC<LanVoicemailThinProps>;
export default LanVoicemailThin;
