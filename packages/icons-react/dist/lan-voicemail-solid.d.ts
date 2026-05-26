import React from 'react';

export interface LanVoicemailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVoicemailSolid: React.FC<LanVoicemailSolidProps>;
export default LanVoicemailSolid;
