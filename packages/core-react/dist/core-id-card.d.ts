import React from 'react';

export interface CoreIdCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreIdCard(props: CoreIdCardProps): React.ReactElement;
export default CoreIdCard;
