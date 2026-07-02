import React from 'react';

export interface CorePhonePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhonePlus(props: CorePhonePlusProps): React.ReactElement;
export default CorePhonePlus;
