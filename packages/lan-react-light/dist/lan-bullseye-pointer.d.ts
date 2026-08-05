import React from 'react';

export interface LanBullseyePointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseyePointer(props: LanBullseyePointerProps): React.ReactElement;
export default LanBullseyePointer;
