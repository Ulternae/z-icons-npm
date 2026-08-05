import React from 'react';

export interface MinaListNumberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaListNumber(props: MinaListNumberProps): React.ReactElement;
export default MinaListNumber;
