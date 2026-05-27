import React from 'react';

export interface CoreVoicemailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVoicemailSolid: React.FC<CoreVoicemailSolidProps>;
export default CoreVoicemailSolid;
