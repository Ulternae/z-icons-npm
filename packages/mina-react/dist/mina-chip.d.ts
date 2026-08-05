import React from 'react';

export interface MinaChipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChip(props: MinaChipProps): React.ReactElement;
export default MinaChip;
