import React from 'react';

export interface LanShredderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShredder(props: LanShredderProps): React.ReactElement;
export default LanShredder;
