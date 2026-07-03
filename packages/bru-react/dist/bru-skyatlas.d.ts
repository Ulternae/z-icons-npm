import React from 'react';

export interface BruSkyatlasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSkyatlas(props: BruSkyatlasProps): React.ReactElement;
export default BruSkyatlas;
