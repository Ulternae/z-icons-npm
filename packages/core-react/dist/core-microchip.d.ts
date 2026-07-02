import React from 'react';

export interface CoreMicrochipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMicrochip(props: CoreMicrochipProps): React.ReactElement;
export default CoreMicrochip;
