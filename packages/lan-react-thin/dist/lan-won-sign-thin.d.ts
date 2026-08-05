import React from 'react';

export interface LanWonSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWonSignThin(props: LanWonSignThinProps): React.ReactElement;
export default LanWonSignThin;
