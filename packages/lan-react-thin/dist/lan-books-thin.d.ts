import React from 'react';

export interface LanBooksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBooksThin(props: LanBooksThinProps): React.ReactElement;
export default LanBooksThin;
