import React from 'react';

export interface NeoStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStop(props: NeoStopProps): React.ReactElement;
export default NeoStop;
