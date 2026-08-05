import React from 'react';

export interface LanListCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListCheck(props: LanListCheckProps): React.ReactElement;
export default LanListCheck;
