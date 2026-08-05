import React from 'react';

export interface MinaMynaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMynaSolid(props: MinaMynaSolidProps): React.ReactElement;
export default MinaMynaSolid;
