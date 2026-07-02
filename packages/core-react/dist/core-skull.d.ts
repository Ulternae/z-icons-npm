import React from 'react';

export interface CoreSkullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSkull(props: CoreSkullProps): React.ReactElement;
export default CoreSkull;
