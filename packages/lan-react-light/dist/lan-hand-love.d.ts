import React from 'react';

export interface LanHandLoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandLove(props: LanHandLoveProps): React.ReactElement;
export default LanHandLove;
