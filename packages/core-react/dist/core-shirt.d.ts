import React from 'react';

export interface CoreShirtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShirt(props: CoreShirtProps): React.ReactElement;
export default CoreShirt;
