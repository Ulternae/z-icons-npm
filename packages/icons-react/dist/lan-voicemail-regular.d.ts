import React from 'react';

export interface LanVoicemailRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVoicemailRegular: React.FC<LanVoicemailRegularProps>;
export default LanVoicemailRegular;
