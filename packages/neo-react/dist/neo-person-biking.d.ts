import React from 'react';

export interface NeoPersonBikingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPersonBiking(props: NeoPersonBikingProps): React.ReactElement;
export default NeoPersonBiking;
