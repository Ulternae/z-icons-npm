import React from 'react';

export interface MinaOptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOption(props: MinaOptionProps): React.ReactElement;
export default MinaOption;
