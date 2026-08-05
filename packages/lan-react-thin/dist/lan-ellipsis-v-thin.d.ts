import React from 'react';

export interface LanEllipsisVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisVThin(props: LanEllipsisVThinProps): React.ReactElement;
export default LanEllipsisVThin;
