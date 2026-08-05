import React from 'react';

export interface NeoStrikethroughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStrikethrough(props: NeoStrikethroughProps): React.ReactElement;
export default NeoStrikethrough;
