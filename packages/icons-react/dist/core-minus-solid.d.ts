import React from 'react';

export interface CoreMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMinusSolid: React.FC<CoreMinusSolidProps>;
export default CoreMinusSolid;
