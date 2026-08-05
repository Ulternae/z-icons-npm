import React from 'react';

export interface LanTromboneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTromboneThin(props: LanTromboneThinProps): React.ReactElement;
export default LanTromboneThin;
