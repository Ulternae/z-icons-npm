import React from 'react';

export interface CoreMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMinusSolid(props: CoreMinusSolidProps): React.ReactElement;
export default CoreMinusSolid;
