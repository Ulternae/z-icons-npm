import React from 'react';

export interface NeoSuitcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSuitcase(props: NeoSuitcaseProps): React.ReactElement;
export default NeoSuitcase;
