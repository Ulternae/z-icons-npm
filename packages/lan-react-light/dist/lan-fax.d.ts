import React from 'react';

export interface LanFaxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFax(props: LanFaxProps): React.ReactElement;
export default LanFax;
