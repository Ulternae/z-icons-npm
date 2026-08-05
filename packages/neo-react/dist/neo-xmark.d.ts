import React from 'react';

export interface NeoXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoXmark(props: NeoXmarkProps): React.ReactElement;
export default NeoXmark;
