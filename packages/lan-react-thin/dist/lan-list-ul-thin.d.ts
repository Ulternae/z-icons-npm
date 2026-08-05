import React from 'react';

export interface LanListUlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListUlThin(props: LanListUlThinProps): React.ReactElement;
export default LanListUlThin;
