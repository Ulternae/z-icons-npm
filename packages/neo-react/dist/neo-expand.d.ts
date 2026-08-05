import React from 'react';

export interface NeoExpandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoExpand(props: NeoExpandProps): React.ReactElement;
export default NeoExpand;
