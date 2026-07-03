import React from 'react';

export interface BruSketchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSketch(props: BruSketchProps): React.ReactElement;
export default BruSketch;
