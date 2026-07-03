import React from 'react';

export interface BruTidalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTidal(props: BruTidalProps): React.ReactElement;
export default BruTidal;
