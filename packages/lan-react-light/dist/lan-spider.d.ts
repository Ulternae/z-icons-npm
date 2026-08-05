import React from 'react';

export interface LanSpiderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpider(props: LanSpiderProps): React.ReactElement;
export default LanSpider;
