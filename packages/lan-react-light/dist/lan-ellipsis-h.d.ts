import React from 'react';

export interface LanEllipsisHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisH(props: LanEllipsisHProps): React.ReactElement;
export default LanEllipsisH;
