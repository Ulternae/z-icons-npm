import React from 'react';

export interface CoreRadioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRadioSolid(props: CoreRadioSolidProps): React.ReactElement;
export default CoreRadioSolid;
