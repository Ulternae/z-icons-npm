import React from 'react';

export interface LanBooksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBooksThin: React.FC<LanBooksThinProps>;
export default LanBooksThin;
