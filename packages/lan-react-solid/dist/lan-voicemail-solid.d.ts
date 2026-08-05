import React from 'react';

export interface LanVoicemailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVoicemailSolid(props: LanVoicemailSolidProps): React.ReactElement;
export default LanVoicemailSolid;
