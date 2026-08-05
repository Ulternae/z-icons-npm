import React from 'react';

export interface LanVoicemailThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVoicemailThin(props: LanVoicemailThinProps): React.ReactElement;
export default LanVoicemailThin;
