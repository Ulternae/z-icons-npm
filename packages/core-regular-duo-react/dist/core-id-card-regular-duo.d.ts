import React from 'react';

export interface CoreIdCardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreIdCardRegularDuo(props: CoreIdCardRegularDuoProps): React.ReactElement;
export default CoreIdCardRegularDuo;
