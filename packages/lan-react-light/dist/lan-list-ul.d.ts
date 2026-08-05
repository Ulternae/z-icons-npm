import React from 'react';

export interface LanListUlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListUl(props: LanListUlProps): React.ReactElement;
export default LanListUl;
