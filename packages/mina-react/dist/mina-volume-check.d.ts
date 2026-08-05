import React from 'react';

export interface MinaVolumeCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeCheck(props: MinaVolumeCheckProps): React.ReactElement;
export default MinaVolumeCheck;
