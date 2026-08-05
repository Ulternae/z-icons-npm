import React from 'react';

export interface LanColonSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanColonSignThin(props: LanColonSignThinProps): React.ReactElement;
export default LanColonSignThin;
