import React from 'react';

export interface CoreBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBolt(props: CoreBoltProps): React.ReactElement;
export default CoreBolt;
