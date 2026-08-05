import React from 'react';

export interface MinaVolumePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumePlus(props: MinaVolumePlusProps): React.ReactElement;
export default MinaVolumePlus;
