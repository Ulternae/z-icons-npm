import React from 'react';

export interface CoreMugSaucerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMugSaucer(props: CoreMugSaucerProps): React.ReactElement;
export default CoreMugSaucer;
