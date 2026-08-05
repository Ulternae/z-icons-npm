import React from 'react';

export interface LanFilterListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilterList(props: LanFilterListProps): React.ReactElement;
export default LanFilterList;
