import React from 'react';

export interface LanStrikethroughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStrikethrough(props: LanStrikethroughProps): React.ReactElement;
export default LanStrikethrough;
