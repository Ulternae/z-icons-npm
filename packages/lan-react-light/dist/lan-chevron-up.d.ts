import React from 'react';

export interface LanChevronUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChevronUp(props: LanChevronUpProps): React.ReactElement;
export default LanChevronUp;
